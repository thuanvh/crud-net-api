using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
 
namespace Domain.Entities
{
    public class BaseEntity
    {
        public BaseEntity()
        {
            Id = Guid.NewGuid().GetHashCode();
            CreateAt = DateTime.UtcNow;
        }
        public int Id { get; set; }
        public DateTime CreateAt { get; set; }
    }
}