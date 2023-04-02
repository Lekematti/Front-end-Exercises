function asTabs(node) {
    const tabs = Array.from(node.children);
    const tabList = document.createElement("div");
    tabList.classList.add("tab-list");
    tabs.forEach((tab, i) => {
        const button = document.createElement("button");
        button.textContent = tab.getAttribute("data-tabname");
        button.addEventListener("click", () => selectTab(i));
        tabList.appendChild(button);
    });
    node.insertBefore(tabList, node.firstChild);
    function selectTab(selectedIndex) {
        tabs.forEach((tab, i) => {
            if (i === selectedIndex) {
                tab.style.display = "";
                tab.classList.add("active-tab");
            } else {
                tab.style.display = "none";
                tab.classList.remove("active-tab");
            }
        });
        const buttons = Array.from(tabList.children);
        buttons.forEach((button, i) => {
            if (i === selectedIndex) {
                button.classList.add("active-tab");
            } else {
                button.classList.remove("active-tab");
            }
        });
    }
    selectTab(0);
}
asTabs(document.querySelector("tab-panel"));