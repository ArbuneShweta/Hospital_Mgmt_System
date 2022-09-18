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
    public class NurseDataAccess : IDataAccess<Nurse, int>
    {
        SqlConnection Conn;
        SqlCommand Cmd;

        public NurseDataAccess()
        {
            Conn = new SqlConnection(configuration.connectionString);
        }

        public Nurse Create(Nurse entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"INSERT INTO Nurse VALUES ({entity.Nurse_Id} ,'{entity.Nurse_Name}',{entity.Ward_Id},'{entity.Mobile}','{entity.Email}','{entity.Address}','{entity.Gender}')";

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

        public Nurse Delete(int id)
        {
            Nurse entity = null;
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Delete From Nurse where Nurse_Id={id}";

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

        public IEnumerable<Nurse> Get()
        {
            List<Nurse> entities = new List<Nurse>();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = "Select * from Nurse";

                SqlDataReader reader = Cmd.ExecuteReader();



                while (reader.Read())
                {
                    entities.Add(
                          new Nurse()
                          {
                              Nurse_Id = Convert.ToInt32(reader["Nurse_Id"]),
                              Nurse_Name = reader["Nurse_Name"].ToString(),
                              Ward_Id = Convert.ToInt32(reader["Ward_Id"]),
                              Mobile = reader["Mobile"].ToString(),
                              Email = reader["Email"].ToString(),
                              Address = reader["Address"].ToString(),
                              Gender = reader["Gender"].ToString(),


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

        public Nurse Get(int id)
        {
            Nurse entity = new Nurse();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Select * from Nurse where Nurse_Id = {id}";

                SqlDataReader reader = Cmd.ExecuteReader();

                reader.Read();
                entity = new Nurse()
                {

                    Nurse_Id = Convert.ToInt32(reader["Nurse_Id"]),
                    Nurse_Name = reader["Nurse_Name"].ToString(),
                    Ward_Id = Convert.ToInt32(reader["Ward_Id"]),
                    Mobile = reader["Mobile"].ToString(),
                    Email = reader["Email"].ToString(),
                    Address = reader["Address"].ToString(),
                    Gender = reader["Gender"].ToString(),

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

        public Nurse Update(int id, Nurse entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"UPDATE Nurse SET Nurse_Id = {entity.Nurse_Id} ,Nurse_Name={entity.Nurse_Name},Ward_Id={entity.Ward_Id},Mobile={entity.Mobile},Email={entity.Email},Address={entity.Address},Gender={entity.Gender}";

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
