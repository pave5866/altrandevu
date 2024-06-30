using Microsoft.EntityFrameworkCore;
using Randevu.Controllers;
using Randevu.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.Configure<SmtpSetting>(builder.Configuration.GetSection("Smtp"));
builder.Services.AddTransient<EmailService>();

// Add DbContext
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

// Add session services
builder.Services.AddDistributedMemoryCache(); // Session için memory cache ekler
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromHours(1); // Session süresini 1 saat olarak ayarla
    options.Cookie.HttpOnly = true; // JS tarafýndan eriþilemez yap
    options.Cookie.IsEssential = true; // Cookie esansiyel olarak iþaretle
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseSession(); // Session middleware'ini ekler
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
