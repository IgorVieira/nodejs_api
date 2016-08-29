describe('Routes Books', ()=>{
   const defaultBook = {
     id:2,
     name:'ReactJs'
   }


   describe('Route GET /books',() =>{
     it('should return a book', done => {
       request
        .get('/books')
        .end((err, res) =>{
          expect(res.body[1].id).to.be.eql(defaultBook.id)
          expect(res.body[1].name).to.be.eql(defaultBook.name)

          done(err)
        })
     })
   })



   describe('Route GET /books',() =>{
     it('should return a list of books', done => {
       request
        .get('/books')
        .end((err, res) =>{
          expect(res.body).to.be.instanceof(Array);
          done(err)
        })
     })
   })
})
