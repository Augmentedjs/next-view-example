import { Level, ConsoleLogger } from "presentation-logger";
const level = (process.env.mode === "production") ? Level.INFO : Level.DEBUG;
const Logger = new ConsoleLogger(level);
export default Logger;
