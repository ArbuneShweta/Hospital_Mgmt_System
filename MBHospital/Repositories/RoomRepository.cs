namespace MBHospital.Repositories
{
    public class RoomRepository : IServiceRepository<Room, int>
    {
        IDataAccess<Room, int> dataAccess;

        public RoomRepository(IDataAccess<Room, int> dataAccess)
        {
            this.dataAccess = dataAccess;
        }

        public ResponseStatus<Room> CreateRecord(Room entity)
        {
            ResponseStatus<Room> response = new ResponseStatus<Room>();
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

        public ResponseStatus<Room> DeleteRecord(int id)
        {
            ResponseStatus<Room> response = new ResponseStatus<Room>();
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

        public ResponseStatus<Room> GetRecord(int id)
        {
            ResponseStatus<Room> response = new ResponseStatus<Room>();
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

        public ResponseStatus<Room> GetRecords()
        {
            ResponseStatus<Room> response = new ResponseStatus<Room>();
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

        public ResponseStatus<Room> UpdateRecord(int id, Room entity)
        {
            ResponseStatus<Room> response = new ResponseStatus<Room>();
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

