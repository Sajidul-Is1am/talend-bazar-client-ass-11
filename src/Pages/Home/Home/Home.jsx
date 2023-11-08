import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import BrowesByCatagory from '../BrowesByCatagory/BrowesByCatagory';
import KnowledgeHub from '../KnowledgeHub/KnowledgeHub';
import SimpleFeatured from '../SimpleFeatured/SimpleFeatured';
const Home = () => {

    return (
        <div>
            <div>
                <Helmet>
                    <title>TanlentBazaar || Home</title>
                </Helmet>
            </div>
            <Banner></Banner>
            <BrowesByCatagory></BrowesByCatagory>
            <KnowledgeHub></KnowledgeHub>
            <SimpleFeatured></SimpleFeatured>
        </div>
    );
};

export default Home;