using Microsoft.EntityFrameworkCore.Migrations;

namespace ProductAPI.Migrations
{
    public partial class DBInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    idPro = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    image01 = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    image02 = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    categorySlug = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    colors = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    slug = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    size = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.idPro);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
