using System;
using System.Net;
using System.Net.Sockets;
using System.Text;

namespace TcpListenerApp
{
    class Program
    {
        private const string url = "http://localhost:3000/";
        static async Task Main(string[] args)
        {
            HttpListener listener = new();
            
            listener.Prefixes.Add(url);
            listener.Start();
            Console.WriteLine($"start {url}");
            while (true)
            {
                HttpListenerContext context = await listener.GetContextAsync();
                HttpListenerRequest request = context.Request;
                HttpListenerResponse response = context.Response;
                Console.WriteLine($"Connected from {request.UserHostAddress}");


                byte[] buffer = await GetResponse();
                response.OutputStream.Write(buffer, 0, buffer.Length);
                response.OutputStream.Close();
                Console.WriteLine("Close connection");
            }
        }
        private static async Task<byte[]> GetResponse()
        {
            StringBuilder response = new();
            string file = await File.ReadAllTextAsync("index.html");
            response.Append(file);

            return Encoding.UTF8.GetBytes(response.ToString());
        }
    }

}