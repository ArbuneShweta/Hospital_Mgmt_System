namespace MBHospital.Repositories
{
    public class MedicinesRepository : IServiceRepository<Medicines, int>
    {
        IDataAccess<Medicines, int> dataAccess;

        public MedicinesRepository(IDataAccess<Medicines, int> dataAccess)
        {
            this.dataAccess = dataAccess;
        }

        public ResponseStatus<Medicines> CreateRecord(Medicines entity)
        {
            ResponseStatus<Medicines> response = new ResponseStatus<Medicines>();
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

        public ResponseStatus<Medicines> DeleteRecord(int id)
        {
            ResponseStatus<Medicines> response = new ResponseStatus<Medicines>();
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

        public ResponseStatus<Medicines> GetRecord(int id)
        {
            ResponseStatus<Medicines> response = new ResponseStatus<Medicines>();
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

        public ResponseStatus<Medicines> GetRecords()
        {
            ResponseStatus<Medicines> response = new ResponseStatus<Medicines>();
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

        public ResponseStatus<Medicines> UpdateRecord(int id, Medicines entity)
        {
            ResponseStatus<Medicines> response = new ResponseStatus<Medicines>();
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