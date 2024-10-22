import Image from "next/image";
import ArticleContainer from "@/components/Article/ArticleContainer";
import ArticleBlock from "@/components/Article/ArticleBlock";
import ArticleHeader from "@/components/Article/ArticleHeader";
import Profile from "@/components/Profile";
import Badge from "@/components/Badge";
import { Icon } from "@iconify/react";

export default function BlogPage({ params }: {
  params: { slug: string };
}) {
  return (
    <>
      <ArticleContainer>
        <ArticleHeader>
          <Image
            src="https://placehold.co/600x480"
            alt="No Image available"
            width={1920}
            height={1080}
            className="w-full h-96 object-cover"
          />

          <div className="flex items-center gap-2">
            <Badge icon="devicon:laravel">
              Laravel
            </Badge>

            <Badge icon="devicon:bootstrap">
              Bootstrap
            </Badge>

            <Badge icon="devicon:mysql">
              MySQL
            </Badge>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold tracking-tighter">
              Common Storage Problems in Laravel
            </h1>

            <div className="flex items-center gap-2 tracking-wide text-gray-400">
              <Icon
                icon="material-symbols-light:calendar-month-outline"
                fontSize={24}
                fontWeight={400}
              />

              Febuary 24, 2024
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Profile
              name="Shava Jaya"
              occupation="Software Engineer"
              src="https://placehold.co/600x480"
            />
          </div>
        </ArticleHeader>

        <p className="tracking-wide leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, sit?
          Sapiente magni debitis tempore amet rerum porro, consequuntur, nulla
          beatae quisquam delectus voluptatum deserunt iure, fugit quos modi
          quis ut?

          {params.slug}
        </p>

        <h2 className="text-4xl font-bold tracking-tight">
          Heading 1
        </h2>

        <h3 className="text-3xl font-bold tracking-tight">
          Heading 2
        </h3>

        <h4 className="text-2xl font-bold tracking-tight">
          Heading 3
        </h4>

        <ArticleBlock>
          <h2 className="text-4xl font-bold tracking-tight">
            Heading 1
          </h2>

          <p className="tracking-wide leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            sit? Sapiente magni debitis tempore amet rerum porro, consequuntur,
            nulla beatae quisquam delectus voluptatum deserunt iure, fugit quos
            modi quis ut?
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <h3 className="text-3xl font-bold tracking-tight">
            Heading 2
          </h3>

          <p className="tracking-wide leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            sit? Sapiente magni debitis tempore amet rerum porro, consequuntur,
            nulla beatae quisquam delectus voluptatum deserunt iure, fugit quos
            modi quis ut?
          </p>
        </ArticleBlock>

        <ArticleBlock>
          <h4 className="text-2xl font-bold tracking-tight">
            Heading 3
          </h4>

          <p className="tracking-wide leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            sit? Sapiente magni debitis tempore amet rerum porro, consequuntur,
            nulla beatae quisquam delectus voluptatum deserunt iure, fugit quos
            modi quis ut?
          </p>
        </ArticleBlock>
      </ArticleContainer>
    </>
  );
}
