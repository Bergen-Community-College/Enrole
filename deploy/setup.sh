#!/bin/bash
# One-time server setup for Enrole static site on Debian 13
# Run as root: bash setup.sh YOUR_DOMAIN

set -e

DOMAIN="${1:?Usage: bash setup.sh YOUR_DOMAIN}"
REPO_URL="https://github.com/Bergen-Community-College/Enrole.git"
SITE_DIR="/var/www/Enrole"
DEPLOY_USER="deploy"
NGINX_CONF="/etc/nginx/sites-available/enrole"

echo "==> Installing packages..."
apt-get update -qq
apt-get install -y nginx git certbot python3-certbot-nginx

echo "==> Creating deploy user..."
id "$DEPLOY_USER" &>/dev/null || useradd -m -s /bin/bash "$DEPLOY_USER"
usermod -aG www-data "$DEPLOY_USER"

echo "==> Cloning repo..."
mkdir -p "$SITE_DIR"
if [ ! -d "$SITE_DIR/.git" ]; then
    git clone "$REPO_URL" "$SITE_DIR"
else
    echo "    Repo already cloned, skipping."
fi
chown -R "$DEPLOY_USER":www-data "$SITE_DIR"
chmod -R 755 "$SITE_DIR"

echo "==> Configuring nginx..."
sed "s/YOUR_DOMAIN/$DOMAIN/g" "$(dirname "$0")/nginx.conf" > "$NGINX_CONF"
ln -sf "$NGINX_CONF" /etc/nginx/sites-enabled/enrole
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable nginx
systemctl reload nginx

echo "==> Obtaining SSL certificate..."
certbot --nginx -d "$DOMAIN" --non-interactive --agree-tos -m "admin@$DOMAIN"

echo "==> Generating SSH deploy key for GitHub Actions..."
sudo -u "$DEPLOY_USER" ssh-keygen -t ed25519 -f "/home/$DEPLOY_USER/.ssh/deploy_key" -N "" -C "github-actions-deploy"

# Allow GitHub Actions to authenticate as deploy user
sudo -u "$DEPLOY_USER" mkdir -p "/home/$DEPLOY_USER/.ssh"
sudo -u "$DEPLOY_USER" cat "/home/$DEPLOY_USER/.ssh/deploy_key.pub" >> "/home/$DEPLOY_USER/.ssh/authorized_keys"
chmod 600 "/home/$DEPLOY_USER/.ssh/authorized_keys"

# Allow deploy user to pull without sudo
sudo -u "$DEPLOY_USER" git -C "$SITE_DIR" config --local core.fileMode false

echo ""
echo "================================================================"
echo "Setup complete. Add these to your GitHub repository secrets:"
echo "  SECRET NAME    VALUE"
echo "  SERVER_HOST    $(curl -s ifconfig.me)"
echo "  SERVER_USER    $DEPLOY_USER"
echo "  SERVER_SSH_KEY (contents below)"
echo "================================================================"
cat "/home/$DEPLOY_USER/.ssh/deploy_key"
