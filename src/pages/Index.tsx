// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Ready to build
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Your beautiful blank canvas awaits. Start creating something amazing.
          </p>
        </div>
        
        <div className="bg-card rounded-lg p-8 shadow-soft border">
          <p className="text-sm text-muted-foreground">
            This is your starting point. Begin by describing what you'd like to build.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
