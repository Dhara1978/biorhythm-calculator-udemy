import { calculateBiorhythms } from "./biorhythms";

it("calculates the physical biorhythm", () => {
    const biorhythms = calculateBiorhythms("1999-12-31", "2022_12_31");
    expect(biorhythms.physical).toBe(0.9977);
});