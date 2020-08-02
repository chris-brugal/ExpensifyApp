const add = (a, b) => a + b;

test('Test should fail', () =>{
    const result = add(3, 44);

    expect(result).toBe(7);
 });

 test('Test should pass', () =>{
    const result = add(3, 4);

    expect(result).toBe(7);
 })