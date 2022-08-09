module.exports = (app) =>{

app.get('/', function(req,res){
  res.send(
    `
  <html>
    <head>
      <meta charset="utf-8"></meta>
    </head>
    <body>
      <h1>Unyleya</h1>
    </body>
  </html>
`

  );

});

app.get('/teste', function(req,res){
  res.send(
    `
  <html>
    <head>
      <meta charset="utf-8"></meta>
    </head>
    <body>
      <h1>Teste</h1>
    </body>
  </html>
`

  );

});
}