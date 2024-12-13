import Header from "../components/common/Header";
import {motion} from "framer-motion";
import {Users,BarChart2, ShoppingBag, Zap} from "lucide-react";
import StatCard from "../components/common/StatCard";


const OverviewPage = () =>{
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <Header title="Overview"/>


            <main className="max-w-7x1 mx-auto py-6 px-4 lg:px-8">

                <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mb-8"
                initial={{opacity:0 , y:20}}
                animate={{opacity:1, y:0}}
                transition={{duration: 1}}
                >
                    <StatCard name="Total Sales" icon={Zap} value="$12,34" color="#6366F1"/>
                    <StatCard name="New Users" icon={Users} value="$12,34" color="#8B5CF6"/>
                    <StatCard name="Total Products" icon={ShoppingBag} value="$12,34" color="#EC4899"/>
                    <StatCard name="Conversion Rate" icon={BarChart2} value="$12,34" color="#10B981"/>
                </motion.div>
            </main>
        </div>
    )
}

export default OverviewPage







