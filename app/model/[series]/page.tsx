import { Metadata } from "next";
import { notFound } from "next/navigation";
import { carListNew } from "@/lib/carListNew";
import CarDetailClient from "@/components/CarDetailClient";

interface PageProps {
  params: Promise<{
    series: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { series } = await params;
  const car = carListNew.find((c) => c.series === series);

  if (!car) {
    return {
      title: "Car Not Found",
      description: "The car you are looking for does not exist.",
    };
  }

  // Create a clean description for SEO (limit to 160 characters)
  const seoDescription =
    car.description && car.description.length > 160
      ? car.description.substring(0, 157) + "..."
      : car.description ||
        `Discover the ${car.name} - ${car.title || "Premium BMW vehicle"}`;

  // Generate keywords from car data
  const keywords = [
    "BMW",
    car.name,
    car.series,
    car.type,
    car.tag,
    "luxury car",
    "premium vehicle",
    "test drive",
    "BMW Indonesia",
  ].filter(Boolean);

  return {
    title: `${car.name} - BMW Indonesia`,
    description: seoDescription,
    keywords: keywords.join(", "),
    openGraph: {
      title: `${car.name} - ${car.title || "BMW Indonesia"}`,
      description: seoDescription,
      images: [
        {
          url: car.path,
          width: 1200,
          height: 630,
          alt: car.name,
        },
      ],
      type: "website",
      siteName: "BMW Indonesia",
    },
    twitter: {
      card: "summary_large_image",
      title: `${car.name} - BMW Indonesia`,
      description: seoDescription,
      images: [car.path],
    },
    alternates: {
      canonical: `/model/${car.series}`,
    },
  };
}

// Generate static params for all car series
export async function generateStaticParams() {
  return carListNew.map((car) => ({
    series: car.series,
  }));
}

export default async function CarDetailPage({ params }: PageProps) {
  const { series } = await params;

  // Find the car by series
  const car = carListNew.find((c) => c.series === series);

  // If car not found, show 404
  if (!car) {
    notFound();
  }

  // Find current car index for navigation
  const currentIndex = carListNew.findIndex((c) => c.series === series);
  const previousCar =
    currentIndex > 0
      ? carListNew[currentIndex - 1]
      : carListNew[carListNew.length - 1];
  const nextCar =
    currentIndex < carListNew.length - 1
      ? carListNew[currentIndex + 1]
      : carListNew[0];

  return (
    <CarDetailClient car={car} previousCar={previousCar} nextCar={nextCar} />
  );
}
