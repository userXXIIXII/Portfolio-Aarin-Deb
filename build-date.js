import { writeFileSync } from "fs";

const date = new Date().toLocaleDateString("fr-FR");

writeFileSync(".env", `VITE_BUILD_DATE=${date}`);