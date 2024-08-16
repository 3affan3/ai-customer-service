from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from main import getResponse

HOST = "127.0.0.1"
PORT = 33


class SERVER(BaseHTTPRequestHandler):

    def do_GET(self):

        parsed_path = urlparse(self.path)
        query_components = parse_qs(parsed_path.query)

        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        
        text = query_components.get('message', [''])[0]
        text = text.replace("~", " ")
        response = getResponse(text)
        self.wfile.write(response.encode())
        
    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.send_header('Access-Control-Allow-Credentials', 'true')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
        self.end_headers()
     

getResponse("_")
serve = HTTPServer((HOST, PORT), SERVER)
print("\nServer is Running...\n")
serve.serve_forever()
serve.server_close()
print("\nServer Closed...\n")