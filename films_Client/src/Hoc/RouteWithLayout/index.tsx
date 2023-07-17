import { ReactNode, ComponentType } from 'react';
import PageLayout from 'components/PageLayout/index';

interface WithLayoutProps {
  children?: ReactNode;
}

const withLayout = (Child: ComponentType<WithLayoutProps>): ComponentType<WithLayoutProps> => {
  const WrappedComponent: ComponentType<WithLayoutProps> = (props: WithLayoutProps) => (
    <PageLayout>
      <Child {...props} />
    </PageLayout>
  );

  return WrappedComponent;
};

export default withLayout;