'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('My API server',()=>{
    
  beforeEach(()=>{
    jest.spyOn(console,'log').mockImplementation();
  });

  it('Not found Request',async()=>{
    const response = await request.get('/abs');
    expect(response.status).toEqual(404);
  });

  it ('bad method',async()=>{
    const response = await request.post('/abc');
    expect(response.status).toEqual(404);
  });
  
  //   it('Create a record using POST',async()=>{
  //     const response = await request.post('/food');
  //     expect(response.status).toEqual(200);
  //   });

  it('Read a list of records using GET',async()=>{
    const response = await request.get('/food');
    expect(response.status).toEqual(200);
  });

  it('Read a record using GET',async()=>{
    const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
  });

  it('Update a record using PUT',async()=>{
    const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
  });

  it('Destroy a record using DELETE',async()=>{
    const response = await request.get('/food/1');
    expect(response.status).toEqual(200);
  });
});