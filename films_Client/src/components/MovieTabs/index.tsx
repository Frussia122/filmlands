import {useState} from 'react';
import { Container } from 'assets/Container/styled';
import {
    MovieInformation,
    MovieMenu,
    MovieAction,
    TabContent,
} from './styled'
import { tabs } from './tabsList';




const MovieTabs = () => {

    const [activeTab, setActiveTab] = useState(0);

    
    const handleTabClick = (index: number) => {
      setActiveTab(index);
    };
  
    return (
        <MovieInformation>
        <Container>
          <MovieMenu>
            {tabs.map((tab, index:number) => (
              <MovieAction
                key={index}
                className={index === activeTab ? 'active_MovieAction' : '' }
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </MovieAction>
            ))}
          </MovieMenu>
          <TabContent>
            {tabs[activeTab].content}
          </TabContent>
        </Container>
      </MovieInformation>
    );
  };
  
  export default MovieTabs;