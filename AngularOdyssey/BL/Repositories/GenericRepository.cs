using AngularOdyssey.BL.Interfaces;
using AngularOdyssey.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using static AngularOdyssey.Models.IdentityModels;

namespace AngularOdyssey.BL.Repositories
{
    public class GenericRepository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected ApplicationDbContext context = new ApplicationDbContext();

        protected DbSet<TEntity> DbSet
        {
            get; set;
        }

        public GenericRepository()
        {
            DbSet = context.Set<TEntity>();
        }

        public virtual IEnumerable<TEntity> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = "")
        {
            IQueryable<TEntity> query = DbSet;

            if (filter != null)
            {
                query = query.Where(filter);
            }

            foreach (var includeProperty in includeProperties.Split
                (new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }

            if (orderBy != null)
            {
                return orderBy(query).ToList();
            }
            else
            {
                return query.AsNoTracking().ToList();
            }
        }

        public virtual TEntity GetByID(object id)
        {
            return DbSet.Find(id);
        }

        public virtual void Insert(TEntity entity)
        {
            // On parcours les properties et on renseigne automatiquement les valeurs USER_CREATION et DATE_CREATION pour chaque insert
            /*foreach (PropertyInfo prop in entity.GetType().GetProperties())
            {
                if (prop.Name == "USER_CREATION")
                {
                    if (HttpContext.Current != null && HttpContext.Current.Session["utilisateur"] != null)
                    {
                        U_UTILISATEUR utilisateur = (U_UTILISATEUR)HttpContext.Current.Session["utilisateur"];
                        prop.SetValue(entity, utilisateur.LOGIN);
                    }
                }
                if (prop.Name == "DATE_CREATION")
                {
                    prop.SetValue(entity, DateTime.Now);
                }
            }*/

            DbSet.Add(entity);
        }

        public virtual void Delete(object id)
        {
            TEntity entityToDelete = DbSet.Find(id);
            Delete(entityToDelete);
        }

        public virtual void Delete(TEntity entityToDelete)
        {
            if (context.Entry(entityToDelete).State == EntityState.Detached)
            {
                DbSet.Attach(entityToDelete);
            }
            DbSet.Remove(entityToDelete);
        }

        public virtual TEntity GetFirst()
        {
            return DbSet.FirstOrDefault();
        }

        public virtual void Update(TEntity entityToUpdate)
        {
            DbSet.Attach(entityToUpdate);

            // On parcours les properties et on renseigne automatiquement les valeurs USER_MAJ et DATE_MAJ pour chaque update
            /*foreach (PropertyInfo prop in entityToUpdate.GetType().GetProperties())
            {
                if (prop.Name == "USER_MAJ")
                {
                    if (HttpContext.Current != null && HttpContext.Current.Session["utilisateur"] != null)
                    {
                        U_UTILISATEUR utilisateur = (U_UTILISATEUR)HttpContext.Current.Session["utilisateur"];
                        prop.SetValue(entityToUpdate, utilisateur.LOGIN);
                    }
                }
                if (prop.Name == "DATE_MAJ")
                {
                    prop.SetValue(entityToUpdate, DateTime.Now);
                }  
            }*/

            context.Entry(entityToUpdate).State = EntityState.Modified;
        }

        public void SaveChanges()
        {
            context.SaveChanges();
        }
    }

}