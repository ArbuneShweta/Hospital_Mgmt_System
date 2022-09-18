using Application.Entities.Base;

namespace Application.Entities
{
    public class Patient : Entity
    {
        public int Patient_Id { get; set; }
        public string First_Name { get; set; }
        public string Middle_Name { get; set; }
        public string Last_Name { get; set; }
        public string Mobile_no { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public int Flat_no { get; set; }
        public string Society { get; set; }
        public string Area { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string DOB { get; set; }
        public string AgeType { get; set; }
        public string Gender { get; set; }
        public string Problem { get; set; }
        public string Problem_Discription { get; set; }
    }
    public class Doctor : Entity
    {
        public int Doctor_Id { get; set; }
        public string Doctor_Name { get; set; }
        public string Email { get; set; }
        public string Specialization { get; set; }
        public string Mobile_No { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }
        public string Fees { get; set; }
        public string Doctor_Type { get; set; }
    }
    public class Nurse: Entity
    {
        public int Nurse_Id { get; set; }
         public string Nurse_Name { get; set; }
        public int Ward_Id { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }

    }
    public class WardBoy : Entity
    {
        public int WardBoy_Id { get; set; }
        public string WardBoy_Name { get; set; }
        public int Ward_Id { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }

    }
    public class Ward : Entity
    {
        public int Ward_Id { get; set; }
        public string Ward_Name { get; set; }
       

    }
    public class Room : Entity
    {
        public int Room_Id { get; set; }
        public int Ward_Id { get; set; }
        public string Room_Type { get; set; }
        public string Room_Status { get; set; }
        public string Charges { get; set; }

    }
    public class Medicines : Entity
    {
        public int Medicine_Id { get; set; }
        public string Medicine_Name { get; set; }
        public string Cost { get; set; }
    }


}