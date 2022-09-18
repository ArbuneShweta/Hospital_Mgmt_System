using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Data.DataAccess
{
    internal class configuration
    {
        public readonly static string connectionString = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Hospital_Mgmt;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
    }
}
