// src/script.ts
export function toggleMode(): void {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img") as HTMLImageElement;

  if (html.classList.contains("light")) {
    img.setAttribute("src", "/assets/avatar-light.png");
  } else {
    img.setAttribute("src", "/assets/avatar.png");
  }
}
