const { getEmpleado, getSalario} = require('../app/AS-AW_N1_ex1_intent2')
const {printData} = require('../app/AS-AW_N1_ex2_intent2')

//getEmpleado tests


test('passing an object id equals object', () => {
    return getEmpleado(1).then(data => {
        expect(typeof data).toBe("object")
    })
  });

test('passing an object id equals Linux Torvalds object', () => {
    return getEmpleado(1).then(data => {
        expect(data).toStrictEqual({
            id: 1,
            name: 'Linux Torvalds'
        })
    })
  });


  test('passing a string to getEmpleado throws an error', () => {
    expect.assertions(1);
    return getEmpleado('').catch(e => expect(e).toMatch('error'));
  })

  test('passing nothing to getEmpleado throws an error', () => {
      expect.assertions(1);
      return getEmpleado().catch(e => expect(e).toMatch('error'))
  })

  test('passing a boolean to getEmpleado throws an error', () => {
    expect.assertions(1);
    return getEmpleado(true).catch(e => expect(e).toMatch('error'))
})

test('passing a float to getEmpleado throws an error', () => {
    expect.assertions(1);
    return getEmpleado(1.4).catch(e => expect(e).toMatch('error'))
})


// getSalario tests

test('passing an object to getSalario equals a number', () => {
    return getSalario({
        id: 1,
        name: 'Linux Torvalds'
    }).then(data => {
        expect(typeof data).toBe("number")
    })
})


test('passing an the Linux Torvalds object to getSalario equals 4000', () => {
    return getSalario({
        id: 1,
        name: 'Linux Torvalds'
    }).then(data => {
        expect(data).toBe(4000)
    })
})


test('the getSalario fails with an Unhandled promise rejection error', async () => {
    try {
      await getSalario();
    } catch (e) {
      expect(e.message).toMatch("Cannot read property 'id' of undefined");
    }
  });


  test('getSalario fails if passed a string', async() => {
      try {
          await getSalario('qwerty');
      } catch (e) {
          expect(e.message).toMatch("Cannot read property 'salary' of undefined")
      }
  })


  test('getSalario fails if passed an invalid object', async() => {
      try {
          await getSalario({})
      } catch(e) {
          expect(e.message).toBe("Cannot read property 'salary' of undefined")
      }
  })

  test('getSalario reject callback', async () => {
      await getSalario({
        id: 1,
        name: 'Linux Torvalds'
    }).then(data=>{return data})
      .catch(e=> expect(e).toBe('error')) 
  })

 // printData() tests

 test('passing the id 1 to printData logs \'Linux Torvalds 4000\'', async () => {
    try {
        await printData(1)
   } catch (e) {
       expect(e).toBe('error')
   }
})

 test('printData fails if passed a string', async () => {
     try {
         await printData('')
    } catch (e) {
        expect(e).toBe('error')
    }
 })


 test('printData fails if passed a boolean', async () => {
    try {
        await printData(true)
   } catch (e) {
       expect(e).toBe('error')
   }
})

test('printData fails if passed nothing', async () => {
    try {
        await printData(true)
   } catch (e) {
       expect(e).toBe('error')
   }
})