import Banner from '../Banner/Banner';
import BrowesByCatagory from '../BrowesByCatagory/BrowesByCatagory';
import KnowledgeHub from '../KnowledgeHub/KnowledgeHub';
import SimpleFeatured from '../SimpleFeatured/SimpleFeatured';
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <BrowesByCatagory></BrowesByCatagory>
            <KnowledgeHub></KnowledgeHub>
            <SimpleFeatured></SimpleFeatured>
        </div>
    );
};

export default Home;