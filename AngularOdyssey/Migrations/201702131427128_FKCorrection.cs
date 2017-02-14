namespace AngularOdyssey.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FKCorrection : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Cards", "Panel_PanelId", "dbo.Panels");
            DropIndex("dbo.Cards", new[] { "Panel_PanelId" });
            RenameColumn(table: "dbo.Cards", name: "Panel_PanelId", newName: "PanelId");
            AlterColumn("dbo.Cards", "PanelId", c => c.Int(nullable: false));
            CreateIndex("dbo.Cards", "PanelId");
            AddForeignKey("dbo.Cards", "PanelId", "dbo.Panels", "PanelId", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Cards", "PanelId", "dbo.Panels");
            DropIndex("dbo.Cards", new[] { "PanelId" });
            AlterColumn("dbo.Cards", "PanelId", c => c.Int());
            RenameColumn(table: "dbo.Cards", name: "PanelId", newName: "Panel_PanelId");
            CreateIndex("dbo.Cards", "Panel_PanelId");
            AddForeignKey("dbo.Cards", "Panel_PanelId", "dbo.Panels", "PanelId");
        }
    }
}
