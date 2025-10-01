import React from 'react';
import AgentCard from '../../ui/cards/AgentCard';

const AgentGrid = React.memo(({ filteredAgents, onSuggestionClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredAgents.map((agent) => (
        <div key={agent.id} id={`agent-${agent.id}`}>
          <AgentCard
            agent={agent}
            onSuggestionClick={onSuggestionClick}
          />
        </div>
      ))}
    </div>
  );
});

AgentGrid.displayName = 'AgentGrid';
export default AgentGrid;
