/**
 * @jest-environment jsdom
 */

const { game } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContent = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContent;
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
});