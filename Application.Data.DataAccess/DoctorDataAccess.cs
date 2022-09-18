using Application.DAL.Contract;
using Application.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Data.DataAccess
{
    public class DoctorDataAccess : IDataAccess<Doctor, int>
    {
        SqlConnection Conn;
        SqlCommand Cmd;

        public DoctorDataAccess()
        {
            Conn = new SqlConnection(configuration.connectionString);
        }

        public Doctor Create(Doctor entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"INSERT INTO Doctor VALUES ({entity.Doctor_Id} ,'{entity.Doctor_Name}' ,'{entity.Email}' ,'{entity.Specialization}' ,'{entity.Mobile_No}' ,'{entity.Address}'  ,'{entity.Gender}','{entity.Fees}','{entity.Doctor_Type}')";

                int result = Cmd.ExecuteNonQuery();

            }
            catch (SqlException ex)
            {
                throw ex;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                Conn.Close();
            }
            return entity;
        }

        public Doctor Delete(int id)
        {
            Doctor entity = null;
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Delete From Doctor where Doctor_Id={id}";

                int result = Cmd.ExecuteNonQuery();
            }
            catch (SqlException ex)
            {
                Console.WriteLine($"Error Occured while Processoing Request {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"General Error {ex.Message}");
            }
            finally
            {
                Conn.Close();
            }
            return entity;
        }

        public IEnumerable<Doctor> Get()
        {
            List<Doctor> entities = new List<Doctor>();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = "Select * from Doctor";

                SqlDataReader reader = Cmd.ExecuteReader();



                while (reader.Read())
                {
                    entities.Add(
                          new Doctor()
                          {
                              Doctor_Id = Convert.ToInt32(reader["Doctor_Id"]),
                              Doctor_Name = reader["Doctor_Name"].ToString(),
                              Email= reader["Email"].ToString(),
                              Specialization = reader["Specialization"].ToString(),
                              Mobile_No = reader["Mobile_No"].ToString(),
                              Address = reader["Address"].ToString(),
                              Gender = reader["Gender"].ToString(),
                              Fees = reader["Fees"].ToString(),
                              Doctor_Type = reader["Doctor_Type"].ToString()
                          }
                        );
                }

                reader.Close();
            }
            catch (SqlException ex)
            {
                Console.WriteLine($"Error Occured while Processoing Request {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"General Error {ex.Message}");
            }
            finally
            {
                Conn.Close();
            }

            return entities;
        }

        public Doctor Get(int id)
        {
            Doctor entity = new Doctor();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Select * from Doctor where Doctor_Id = {id}";

                SqlDataReader reader = Cmd.ExecuteReader();

                reader.Read();
                entity = new Doctor()
                {
                    Doctor_Id = Convert.ToInt32(reader["Doctor_Id"]),
                    Doctor_Name = reader["Doctor_Name"].ToString(),
                    Email = reader["Email"].ToString(),
                    Specialization = reader["Specialization"].ToString(),
                    Mobile_No = reader["Mobile_No"].ToString(),
                    Address = reader["Address"].ToString(),
                    Gender = reader["Gender"].ToString(),
                    Fees = reader["Fees"].ToString(),
                    Doctor_Type = reader["Doctor_Type"].ToString()
                };

                reader.Close();
            }
            catch (SqlException ex)
            {
                Console.WriteLine($"Error Occured while Processoing Request {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"General Error {ex.Message}");
            }
            finally
            {
                Conn.Close();
            }

            return entity;
        }

        public Doctor Update(int id, Doctor entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"UPDATE Doctor SET Doctor_Id = {entity.Doctor_Id} ,Doctor_Name={entity.Doctor_Name},Email={entity.Email} ,Specialization={entity.Specialization}' ,Mobile_No={entity.Mobile_No} ,Address={entity.Address} ,Gender={entity.Gender} ,Fees={entity.Fees},Doctor_Type={entity.Doctor_Type}";

                int result = Cmd.ExecuteNonQuery();

            }
            catch (SqlException ex)
            {
                Console.WriteLine($"Error Occured while Processoing Request {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"General Error {ex.Message}");
            }
            finally
            {
                Conn.Close();
            }

            return entity;
        }
    
}
}
