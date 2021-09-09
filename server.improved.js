const http = require( 'http' ),
      fs   = require( 'fs' ),
      // IMPORTANT: you must run `npm install` in the directory for this assignment
      // to install the mime library used in the following line of code
      mime = require( 'mime' ),
      dir  = 'public/',
      port = 3000

const appdata = [
  { 'name': 'AAA', 'score': 43, 'game': 'Mario Bros.', 'highscore': true, 'id': 0},
  { 'name': 'ABC', 'score': 67, 'game': 'Donkey Kong', 'highscore': true, 'id': 1},
  { 'name': 'ZZZ', 'score': 168, 'game': 'Street Racing', 'highscore': true, 'id': 2},
  { 'name': 'E', 'score': 2, 'game': 'Mario', 'highscore': false, 'id': 3}
]

const server = http.createServer( function( request,response ) {
  if( request.method === 'GET' ) {
    handleGet( request, response );
  }else if( request.method === 'POST' ){
    handlePost( request, response );
  }
})

const handleGet = function( request, response ) {
  const filename = dir + request.url.slice( 1 ) 

  if( request.url === '/' ) {
    sendFile( response, 'public/index.html' );
  } else if(request.url === '/update') {
    const type = mime.getType(appdata);
    response.writeHead(200, {'Content-Type': type});
    response.write(JSON.stringify(appdata));
    response.end();
  } else {
    sendFile( response, filename );
  }
}

const handlePost = function( request, response ) {
  let dataString = ''

  request.on( 'data', function( data ) {
      dataString += data 
  })

  request.on( 'end', function() {
    const json = JSON.parse(dataString)
    console.log(json);

    if(request.url === '/delete') {
      for(let i = 0; i < appdata.length; i++) {
        if(appdata[i].id === json.id) { // ID Matches
          appdata[i] = null;
          console.log("Deletion complete");
          break;
        }
      }
    } else if(request.url === '/submit') {
      appdata[appdata.length+1] = json;
    } else if(request.url === '/modify') {
      for(let i = 0; i < appdata.length; i++) {
        if(appdata[i].id === json.id) { // ID Matches
          appdata[i] = json;
          console.log("Modify complete");
          break;
        }
      }
    }

    response.writeHead( 200, "OK", {'Content-Type': 'text/plain' })
    response.end()
  })
}

const sendFile = function( response, filename ) {
   const type = mime.getType( filename ) 

   fs.readFile( filename, function( err, content ) {

     // if the error = null, then we've loaded the file successfully
     if( err === null ) {

       // status code: https://httpstatuses.com
       response.writeHeader( 200, { 'Content-Type': type })
       response.end( content )

     }else{

       // file not found, error code 404
       response.writeHeader( 404 )
       response.end( '404 Error: File Not Found' )

     }
   })
}

server.listen( process.env.PORT || port )
