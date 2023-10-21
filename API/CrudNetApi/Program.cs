using Infrastructure.Services;
var builder = WebApplication.CreateBuilder(args);
 
// Add services to the container.
 
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
 
builder.Services.AddApplication(builder.Configuration);
//builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
 
builder.Services.AddCors(Opt => Opt.AddDefaultPolicy(opt =>
                {
                    opt.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                }));
 
var app = builder.Build();
 
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
 
app.UseHttpsRedirection();
 
 
app.UseAuthorization();
 
app.MapControllers();
app.UseCors();
app.Run();