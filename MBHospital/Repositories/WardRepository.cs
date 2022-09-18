namespace MBHospital.Repositories
{
    public class WardRepository : IServiceRepository<Ward, int>
    {
        IDataAccess<Ward, int> dataAccess;

        public WardRepository(IDataAccess<Ward, int> dataAccess)
        {
            this.dataAccess = dataAccess;
        }

        public ResponseStatus<Ward> CreateRecord(Ward entity)
        {
            ResponseStatus<Ward> response = new ResponseStatus<Ward>();
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

        public ResponseStatus<Ward> DeleteRecord(int id)
        {
            ResponseStatus<Ward> response = new ResponseStatus<Ward>();
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

        public ResponseStatus<Ward> GetRecord(int id)
        {
            ResponseStatus<Ward> response = new ResponseStatus<Ward>();
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

        public ResponseStatus<Ward> GetRecords()
        {
            ResponseStatus<Ward> response = new ResponseStatus<Ward>();
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

        public ResponseStatus<Ward> UpdateRecord(int id, Ward entity)
        {
            ResponseStatus<Ward> response = new ResponseStatus<Ward>();
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

