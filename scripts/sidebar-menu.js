(function () {
  var HIDE_ITEMS = [
    "instructorListing.jsp",
	"logout.jsp"
  ];

  var MENU_ITEMS = [
    {
      href: "index.jsp",
      exclude: "categoryId",
      icon: "fa-solid fa-book-open",
      label: "Browse Courses",
    },
    {
      href: "categoryId=C6B87DC8",
      icon: "fa-solid fa-location-dot",
      label: "Courses by Location",
    },
    {
      href: "calendar.jsp",
      icon: "fa-regular fa-calendar-days",
      label: "Courses by Calendar",
    },
    {
      href: "cart.jsp",
      icon: "fa-solid fa-cart-shopping",
      label: "Registration Cart",
    },
    {
      href: "categoryId=87C83B68.jsp",
      icon: "fa-solid fa-cart-award",
      label: "Credential Programs",
    },
    {
      href: "categoryId=87C950C0.jsp",
      icon: "fa-solid fa-cart-laptop",
      label: "Partner Online Courses",
    },
    {
      href: "categoryId=87C9A6B0.jsp",
      icon: "fa-solid fa-cart-briefcase",
      label: "Bergen for Business",
    },
    {
      href: "login.jsp",
      icon: "fa-solid fa-user",
      label: "Sign in/Create user profile",
    },
    {
      href: "myaccount.jsp",
      icon: "fa-solid fa-user",
      label: "My Account",
    }
  ];

  function init() {
    var leftMenus = document.querySelectorAll(".leftMenu");
    if (leftMenus.length < 2) return;

    var targetUl = leftMenus[0].querySelector("ul");
    if (!targetUl) return;

    // Move all <li> children from every .leftMenu into the first ul
    for (var m = 1; m < leftMenus.length; m++) {
      var uls = leftMenus[m].querySelectorAll("ul");
      for (var u = 0; u < uls.length; u++) {
        while (uls[u].children.length) {
          targetUl.appendChild(uls[u].children[0]);
        }
      }
    }

    // Remove the now-empty wrappers
    for (var k = leftMenus.length - 1; k > 0; k--) {
      leftMenus[k].parentNode.removeChild(leftMenus[k]);
    }

    // Only filter on minimal pages (index, cart, login)
    var path = location.pathname;
    var search = location.search;
    var isMinimal = /(index|cart|login)\.jsp$/.test(path);
    if (
      path.indexOf("index.jsp") !== -1 &&
      search.indexOf("categoryId") !== -1
    ) {
      isMinimal = false;
    }

    var allLis = targetUl.querySelectorAll("li");
    for (var i = 0; i < allLis.length; i++) {
      var li = allLis[i];
      var a = li.querySelector("a");
      if (!a) continue;

      var href = a.getAttribute("href") || "";

      // Always hide items matching HIDE_ITEMS
      var hide = false;
      for (var hi = 0; hi < HIDE_ITEMS.length; hi++) {
        if (href.indexOf(HIDE_ITEMS[hi]) !== -1) {
          hide = true;
          break;
        }
      }
      if (hide) {
        li._matchIndex = -1;
        li.style.display = "none";
        continue;
      }

      var match = null;
      for (var j = 0; j < MENU_ITEMS.length; j++) {
        var entry = MENU_ITEMS[j];
        if (href.indexOf(entry.href) !== -1) {
          if (entry.exclude && href.indexOf(entry.exclude) !== -1) continue;
          match = entry;
          break;
        }
      }

      if (match) {
        var oldIcon = a.querySelector("i");
        if (oldIcon) oldIcon.parentNode.removeChild(oldIcon);
        a.innerHTML = "";
        var icon = document.createElement("i");
        icon.className = match.icon;
        a.appendChild(icon);
        a.appendChild(document.createTextNode(match.label));
        li._matchIndex = j;
      } else {
        li._matchIndex = -1;
        var otherIcons = a.querySelectorAll("i");
        for (var oi = 0; oi < otherIcons.length; oi++) {
          otherIcons[oi].parentNode.removeChild(otherIcons[oi]);
        }
        if (isMinimal) li.style.display = "none";
      }
    }

    // Sort matched items by MENU_ITEMS order, unmatched stay at bottom
    var lisArray = Array.prototype.slice.call(targetUl.children);
    lisArray.sort(function (a, b) {
      var ai = a._matchIndex,
        bi = b._matchIndex;
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return 0;
    });
    for (var si = 0; si < lisArray.length; si++) {
      targetUl.appendChild(lisArray[si]);
    }

    // Mark current page as active
    var currentPath = location.pathname;
    var currentSearch = location.search;
    var catMatch = currentSearch.match(/categoryId=([^&]+)/);
    var links = targetUl.querySelectorAll("a");
    for (var l = 0; l < links.length; l++) {
      var linkHref = links[l].getAttribute("href") || "";
      var isMatch = false;
      if (catMatch) {
        isMatch = linkHref.indexOf("categoryId=" + catMatch[1]) !== -1;
      } else {
        var jsp = currentPath.match(/\/([^/]+\.jsp)$/);
        if (jsp) isMatch = linkHref.indexOf(jsp[1]) !== -1 && linkHref.indexOf("categoryId") === -1;
      }
      if (isMatch) {
        links[l].classList.add("active");
        break;
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
