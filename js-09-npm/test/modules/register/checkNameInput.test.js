import { checkNameInput } from "../../../src/pages/register/checkNameInput";

test ("Verificar que el nombre ingresado sea valido", () => {
    expect(checkNameInput ("Arenita")).toBe( true );
    expect(checkNameInput("Kati")).toBeTruthy();
});

test ("Verificar que el nombre ingresado sea invalido", ()=>{

    expect(checkNameInput("") ).toBe(false);
    expect(checkNameInput("   David") ).toBe(false);
    expect(checkNameInput("    ")).toBe(false);
    expect(checkNameInput("D")).toBeFalsy();
});

test ("Verificar que el nombre sea null o undefined", ()=>{

    expect(checkNameInput(null)).toBeFalsy();

    expect(checkNameInput(undefined)).toBeFalsy();

});
