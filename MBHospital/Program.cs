var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<IDataAccess<Patient, int>, PatientDataAccess>();

builder.Services.AddScoped<IServiceRepository<Patient, int>, PatientRepository>();
builder.Services.AddScoped<IDataAccess<Doctor, int>, DoctorDataAccess>();
builder.Services.AddScoped<IServiceRepository<Doctor, int>, DoctorRepository>();
builder.Services.AddScoped<IDataAccess<Nurse, int>, NurseDataAccess>();
builder.Services.AddScoped<IServiceRepository<Nurse, int>, NurseRepository>();
builder.Services.AddScoped<IDataAccess<WardBoy, int>, WardBoyDataAccess>();
builder.Services.AddScoped<IServiceRepository<WardBoy, int>, WardBoyRepository>();
builder.Services.AddScoped<IDataAccess<Ward, int>, WardDataAccess>();
builder.Services.AddScoped<IServiceRepository<Ward, int>, WardRepository>();
builder.Services.AddScoped<IDataAccess<Room, int>, RoomDataAccess>();
builder.Services.AddScoped<IServiceRepository<Room, int>, RoomRepository>();
builder.Services.AddScoped<IDataAccess<Medicines, int>,MedicineDataAccess>();
builder.Services.AddScoped<IServiceRepository<Medicines, int>, MedicinesRepository>();



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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

app.Run();
