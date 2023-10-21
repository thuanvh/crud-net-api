dotnet ef migrations add  initialcreate -p .\Infrastructure\ -s API  -o Migrations
 
dotnet ef database update -p Infrastructure -s API