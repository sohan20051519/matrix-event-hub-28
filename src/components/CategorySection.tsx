import { ReactNode } from 'react';

interface CategorySectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const CategorySection = ({ title, icon, children }: CategorySectionProps) => {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="text-4xl">{icon}</div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {children}
      </div>
    </section>
  );
};

export default CategorySection;