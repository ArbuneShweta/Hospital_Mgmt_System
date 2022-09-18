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
    public  class MedicineDataAccess : IDataAccess<Medicines, int>
    {
        SqlConnection Conn;
        SqlCommand Cmd;

        public MedicineDataAccess()
        {
            Conn = new SqlConnection(configuration.connectionString);
        }

        public Medicines Create(Medicines entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"INSERT INTO Medicines VALUES ({entity.Medicine_Id} ,'{entity.Medicine_Name}','{entity.Cost}')";

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

        public Medicines Delete(int id)
        {
            Medicines entity = null;
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Delete From Medicines where Medicine_Id={id}";

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

        public IEnumerable<Medicines> Get()
        {
            List<Medicines> entities = new List<Medicines>();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = "Select * from Medicines";

                SqlDataReader reader = Cmd.ExecuteReader();



                while (reader.Read())
                {
                    entities.Add(
                          new Medicines()
                          {
                              Medicine_Id = Convert.ToInt32(reader["Medicine_Id"]),
                              Medicine_Name = reader["Medicine_Name"].ToString(),
                              Cost = reader["Cost"].ToString(),
                             

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

        public Medicines Get(int id)
        {
            Medicines entity = new Medicines();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Select * from Medicines where Medicine_Id = {id}";

                SqlDataReader reader = Cmd.ExecuteReader();

                reader.Read();
                entity = new Medicines()
                {
                    Medicine_Id = Convert.ToInt32(reader["Medicine_Id"]),
                    Medicine_Name = reader["Medicine_Name"].ToString(),
                    Cost = reader["Cost"].ToString(),


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

        public Medicines Update(int id, Medicines entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"UPDATE Medicines SET Medicine_Id = {entity.Medicine_Id} ,Medicine_Name={entity.Medicine_Name},Cost={entity.Cost}";

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