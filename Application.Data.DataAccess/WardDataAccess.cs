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
    public class WardDataAccess : IDataAccess<Ward, int>
    {
        SqlConnection Conn;
        SqlCommand Cmd;

        public WardDataAccess()
        {
            Conn = new SqlConnection(configuration.connectionString);
        }

        public Ward Create(Ward entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"INSERT INTO Ward VALUES ({entity.Ward_Id} ,'{entity.Ward_Name}')";

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

        public Ward Delete(int id)
        {
            Ward entity = null;
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Delete From Ward where Ward_Id={id}";

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

        public IEnumerable<Ward> Get()
        {
            List<Ward> entities = new List<Ward>();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = "Select * from Ward";

                SqlDataReader reader = Cmd.ExecuteReader();



                while (reader.Read())
                {
                    entities.Add(
                          new Ward()
                          {
                              Ward_Id = Convert.ToInt32(reader["Ward_Id"]),
                              Ward_Name = reader["Ward_Name"].ToString()
                   
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

        public Ward Get(int id)
        {
            Ward entity = new Ward();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Select * from Ward where Ward_Id = {id}";

                SqlDataReader reader = Cmd.ExecuteReader();


                reader.Read();
                entity = new Ward()
                {
                    Ward_Id = Convert.ToInt32(reader["Patient_Id"]),
                    Ward_Name = reader["Ward_Name"].ToString()
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

        public Ward Update(int id, Ward entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"UPDATE Ward SET Ward_Id = {entity.Ward_Id} ,Ward_Name={entity.Ward_Name}";

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
