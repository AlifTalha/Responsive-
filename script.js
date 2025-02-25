function changeSize(device) {
    const content = document.querySelector(".content");

    if (device === "laptop") {
        content.className = "content laptop";
    } else if (device === "tablet") {
        content.className = "content tablet";
    } else if (device === "phone") {
        content.className = "content phone";
    }
}
