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
    public class WardBoyDataAccess : IDataAccess<WardBoy, int>
    {

        SqlConnection Conn;
        SqlCommand Cmd;

        public WardBoyDataAccess()
        {
            Conn = new SqlConnection(configuration.connectionString);
        }

        public WardBoy Create(WardBoy entity)
        {

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"INSERT INTO Ward_Boy VALUES ({entity.WardBoy_Id} ,'{entity.WardBoy_Name}',{entity.Ward_Id},'{entity.Mobile}','{entity.Email}','{entity.Address}','{entity.Gender}')";

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

        public WardBoy Delete(int id)
        {
            WardBoy entity = null;
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Delete From Ward_Boy where WardBoy_Id={id}";

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

        public IEnumerable<WardBoy> Get()
        {
            List<WardBoy> entities = new List<WardBoy>();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = "Select * from Ward_Boy";

                SqlDataReader reader = Cmd.ExecuteReader();



                while (reader.Read())
                {
                    entities.Add(
                          new WardBoy()
                          {
                              WardBoy_Id = Convert.ToInt32(reader["WardBoy_Id"]),
                              WardBoy_Name = reader["WardBoy_Name"].ToString(),
                              Ward_Id= Convert.ToInt32(reader["Ward_Id"]),
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

        public WardBoy Get(int id)
        {
            WardBoy entity = new WardBoy();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Select * from Ward_Boy where WardBoy_Id = {id}";

                SqlDataReader reader = Cmd.ExecuteReader();


                reader.Read();
                entity = new WardBoy()
                {
                    WardBoy_Id = Convert.ToInt32(reader["WardBoy_Id"]),
                    WardBoy_Name = reader["WardBoy_Name"].ToString(),
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

        public WardBoy Update(int id, WardBoy entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"UPDATE Ward_Boy SET WardBoy_Id = {entity.WardBoy_Id} ,WardBoy_Name={entity.WardBoy_Name},Ward_Id={entity.Ward_Id},Mobile={entity.Mobile},Email={entity.Email},Address={entity.Address},Gender={entity.Gender}";

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
