import { Card } from './ui/card';
import { Button } from './ui/button';
import { settingsOptions } from '@/lib/constants';
import * as Icons from 'lucide-react';

export function SettingsPanel() {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {Object.entries(settingsOptions).map(([category, options]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
          <div className="space-y-3">
            {options.map((option) => {
              const IconComponent = Icons[option.icon as keyof typeof Icons];
              return (
                <Card key={option.title} className="p-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-accent/10"
                  >
                    <IconComponent className="mr-2 h-5 w-5 text-accent" />
                    {option.title}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}