document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.innerText;

            if (value === "AC") {
                display.value = ""; // Clear display
            } else if (value === "DEL") {
                display.value = display.value.slice(0, -1);
            } else if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } else {
                display.value += value;
            }
        });
    });
});
