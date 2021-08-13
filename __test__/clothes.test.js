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
  
  it('Create a record using POST',async()=>{
    let newclothes={
      clothesType:'shirt',
      clothesBrand:'zara',
    };
    const response = await request.post('/clothes').send(newclothes);
    expect(response.status).toEqual(200);
  });

  it('Read a list of records using GET',async()=>{
    const response = await request.get('/clothes');
    expect(response.status).toEqual(200);
  });

  it('Read a record using GET',async()=>{
    const response = await request.get('/clothes/1');
    expect(response.status).toEqual(200);
  });

  it('Update a record using PUT',async()=>{
    let obj = {
      id:1,
      clothesType:'shirt',
      clothesBrand:'zara',
    };
    const response = await request.get('/clothes/1').send(obj);
    expect(response.status).toEqual(200);
  });

  it('Destroy a record using DELETE',async()=>{
    const response = await request.delete('/clothes/1');
    expect(response.status).toEqual(204);
  });
});