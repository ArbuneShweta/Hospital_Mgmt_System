using Application.DAL.Contract;
using Application.Entities;
using System.Data;
using System.Data.SqlClient;

namespace Application.Data.DataAccess
{

    public class PatientDataAccess : IDataAccess<Patient, int>
    {
        SqlConnection Conn;
        SqlCommand Cmd;

        public PatientDataAccess()
        {
            Conn = new SqlConnection(configuration.connectionString);
        }

        public Patient Create(Patient entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"INSERT INTO Patient VALUES ({entity.Patient_Id} ,'{entity.First_Name}' ,'{entity.Last_Name}' ,'{entity.Middle_Name}' ,'{entity.Mobile_no}' ,'{entity.Email}' ,'{entity.Address}' ,{entity.Flat_no},'{entity.Society}','{entity.Area}','{entity.City}','{entity.State}','{entity.DOB}','{entity.AgeType}','{entity.Gender}','{entity.Problem}','{entity.Problem_Discription}')";

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

        public Patient Delete(int id)
        {
            Patient entity = null;
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Delete From Patient where Patient_Id={id}";

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

        public IEnumerable<Patient> Get()
        {
            List<Patient> entities = new List<Patient>();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = "Select * from Patient";

                SqlDataReader reader = Cmd.ExecuteReader();



                while (reader.Read())
                {
                    entities.Add(
                          new Patient()
                          {
                              Patient_Id = Convert.ToInt32(reader["Patient_ID"]),
                              First_Name = reader["First_Name"].ToString(),
                              Last_Name = reader["Last_Name"].ToString(),
                              Middle_Name = reader["Middle_Name"].ToString(),
                              Mobile_no = reader["Mobile_no"].ToString(),
                              Email = reader["Email"].ToString(),
                              Address=reader["Address"].ToString(),
                              Flat_no=Convert.ToInt32(reader["Flat_no"].ToString()),
                              Society=reader["Society"].ToString(),
                              Area=reader["Area"].ToString(),
                              City=reader["State"].ToString(),
                              State=reader["State"].ToString(),
                              DOB=reader["DOB"].ToString(),
                              AgeType=reader["AgeType"].ToString(),
                              Gender = reader["Gender"].ToString(),
                              Problem=reader["Problem"].ToString(),
                              Problem_Discription=reader["Problem_Discription"].ToString()

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

        public Patient Get(int id)
        {
            Patient entity = new Patient();

            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"Select * from Patient where Patient_Id = {id}";

                SqlDataReader reader = Cmd.ExecuteReader();


                reader.Read();
                entity = new Patient()
                {
                    Patient_Id = Convert.ToInt32(reader["Patient_Id"]),
                    First_Name = reader["First_Name"].ToString(),
                    Last_Name = reader["Last_Name"].ToString(),
                    Middle_Name = reader["Middle_Name"].ToString(),
                    Mobile_no =reader["Mobile_no"].ToString(),
                    Email = reader["Email"].ToString(),
                    Address = reader["Address"].ToString(),
                    Flat_no = Convert.ToInt32(reader["Flat_no"].ToString()),
                    Society = reader["Society"].ToString(),
                    Area = reader["Area"].ToString(),
                    City = reader["State"].ToString(),
                    State = reader["State"].ToString(),
                    DOB = reader["DOB"].ToString(),
                    AgeType = reader["AgeType"].ToString(),
                    Gender = reader["Gender"].ToString(),
                    Problem = reader["Problem"].ToString(),
                    Problem_Discription = reader["Problem_Discription"].ToString()

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

        public Patient Update(int id, Patient entity)
        {
            try
            {
                Conn.Open();

                Cmd = new SqlCommand();
                Cmd.Connection = Conn;
                Cmd.CommandType = CommandType.Text;
                Cmd.CommandText = $"UPDATE Patient SET Patient_Id = {entity.Patient_Id} ,First_Name={entity.First_Name},Last_Name={entity.Last_Name} ,Middle_Name={entity.Middle_Name}' ,Mobile_no={entity.Mobile_no} ,Email={entity.Email} ,Address={entity.Address} ,Flat_no={entity.Flat_no},Society={entity.Society},Area={entity.Area},City={entity.City},State={entity.State},DOB={entity.DOB},AgeType={entity.AgeType},Gender={entity.Gender},Problem=-{entity.Problem},Problem_Discription={entity.Problem_Discription}";

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