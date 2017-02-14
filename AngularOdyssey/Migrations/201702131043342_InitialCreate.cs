namespace AngularOdyssey.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cards",
                c => new
                    {
                        CardId = c.Int(nullable: false, identity: true),
                        X = c.Int(nullable: false),
                        Y = c.Int(nullable: false),
                        Width = c.Int(nullable: false),
                        Height = c.Int(nullable: false),
                        Content = c.String(),
                        Panel_PanelId = c.Int(),
                    })
                .PrimaryKey(t => t.CardId)
                .ForeignKey("dbo.Panels", t => t.Panel_PanelId)
                .Index(t => t.Panel_PanelId);
            
            CreateTable(
                "dbo.Panels",
                c => new
                    {
                        PanelId = c.Int(nullable: false, identity: true),
                        Title = c.String(),
                        CreatedOn = c.DateTime(nullable: false),
                        LastModified = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.PanelId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Cards", "Panel_PanelId", "dbo.Panels");
            DropIndex("dbo.Cards", new[] { "Panel_PanelId" });
            DropTable("dbo.Panels");
            DropTable("dbo.Cards");
        }
    }
}
