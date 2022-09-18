namespace MBHospital.Repositories
{
    public class WardBoyRepository : IServiceRepository<WardBoy, int>
    {
        IDataAccess<WardBoy, int> dataAccess;

        public WardBoyRepository(IDataAccess<WardBoy, int> dataAccess)
        {
            this.dataAccess = dataAccess;
        }

        public ResponseStatus<WardBoy> CreateRecord(WardBoy entity)
        {
            ResponseStatus<WardBoy> response = new ResponseStatus<WardBoy>();
            try
            {
                response.Record = dataAccess.Create(entity);
                response.Message = "Record is created successfully";
                response.StatusCode = 201;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return response;
        }

        public ResponseStatus<WardBoy> DeleteRecord(int id)
        {
            ResponseStatus<WardBoy> response = new ResponseStatus<WardBoy>();
            try
            {
                response.Record = dataAccess.Delete(id);
                response.Message = "Record is delete successfully";
                response.StatusCode = 203;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return response;
        }

        public ResponseStatus<WardBoy> GetRecord(int id)
        {
            ResponseStatus<WardBoy> response = new ResponseStatus<WardBoy>();
            try
            {
                response.Record = dataAccess.Get(id);
                response.Message = "Record is read successfully";
                response.StatusCode = 200;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return response;
        }

        public ResponseStatus<WardBoy> GetRecords()
        {
            ResponseStatus<WardBoy> response = new ResponseStatus<WardBoy>();
            try
            {
                response.Records = dataAccess.Get();
                response.Message = "Records are read successfully";
                response.StatusCode = 200;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return response;
        }

        public ResponseStatus<WardBoy> UpdateRecord(int id, WardBoy entity)
        {
            ResponseStatus<WardBoy> response = new ResponseStatus<WardBoy>();
            try
            {
                response.Record = dataAccess.Update(id, entity);
                response.Message = "Record is updated successfully";
                response.StatusCode = 204;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return response;
        }
    }
}

