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
    public class RoomDataAccess : IDataAccess<Room, int>
    {
        SqlConnection Conn;
        SqlCommand Cmd;

        public RoomDataAccess()
        {
            Conn = new SqlConnection(configuration.connectionString);
        }
        public Room Create(Room entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"INSERT INTO Room VALUES ({entity.Room_Id} ,{entity.Ward_Id},'{entity.Room_Type}','{entity.Room_Status}','{entity.Charges}')";

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

        public Room Delete(int id)
        {
            Room entity = null;
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Delete From Room where Room_Id={id}";

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

        public IEnumerable<Room> Get()
        {
            List<Room> entities = new List<Room>();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = "Select * from Room";

                SqlDataReader reader = Cmd.ExecuteReader();



                while (reader.Read())
                {
                    entities.Add(
                          new Room()
                          {
                              Room_Id = Convert.ToInt32(reader["Room_Id"]),
                              Ward_Id= Convert.ToInt32(reader["Ward_Id"]),
                              Room_Type = reader["Room_Type"].ToString(),
                              Room_Status= reader["Room_Status"].ToString(),
                              Charges= reader["Charges"].ToString(),


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

        public Room Get(int id)
        {
            Room entity = new Room();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Select * from Room where Room_Id = {id}";

                SqlDataReader reader = Cmd.ExecuteReader();

                reader.Read();
                entity = new Room()
                {
                    Room_Id = Convert.ToInt32(reader["Room_Id"]),
                              Ward_Id = Convert.ToInt32(reader["Ward_Id"]),
                              Room_Type = reader["Room_Type"].ToString(),
                              Room_Status = reader["Room_Status"].ToString(),
                              Charges = reader["Charges"].ToString(),


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
        public Room Update(int id, Room entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"UPDATE Room SET Room_Id = {entity.Room_Id} , Ward_Id={entity.Ward_Id},Room_Type={entity.Room_Type}, Room_status={entity.Room_Status} ,Charges={entity.Charges}";
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
