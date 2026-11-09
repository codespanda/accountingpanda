import { fq } from "@/lib/finalTest"

// Final test bank for Inventory Accounting and Valuation — separate from the
// module knowledge checks. The correct answer is listed first; the test
// shuffles the options.

export default [
  // Module 1
  fq("Maple Ridge's imported cushions and lamps are which type of inventory?", "Goods for resale", ["Raw materials", "Work in progress", "Finished goods"], "Bought to sell unchanged."),
  fq("Which inventory system does Maple Ridge use?", "Perpetual, checked by counts", ["Periodic only", "No system", "Cash basis"], "Its software tracks every movement."),
  fq("Maple Ridge holds $8,000 of its sofas, $2,000 of consignment vases, $1,500 of sold chairs awaiting collection and $3,000 of lamps at sea (FOB shipping point). What's its inventory?", "$11,000", ["$14,500", "$12,500", "$8,000"], "Exclude consignment and sold goods."),
  fq("Closing inventory was overstated by $4,000. What happens to next year's profit?", "It's understated by $4,000", ["It's overstated by $4,000", "No effect", "It doubles"], "Opening inventory is too high."),
  fq("Under FOB destination terms, who owns goods in transit?", "The seller, until delivery", ["The buyer", "The shipping line", "Neither"], "Ownership passes on arrival."),
  fq("Timber is which type of inventory for Maple Ridge?", "Raw materials", ["Finished goods", "Goods for resale", "Work in progress"], "Inputs waiting to be used."),

  // Module 2
  fq("What are Maple Ridge's fixed workshop overheads a year?", "$120,000", ["$96,000", "$24,000", "$12,000"], "Absorbed at $12 a piece on normal capacity."),
  fq("How much overhead went unabsorbed when Maple Ridge made 8,000 pieces?", "$24,000", ["$96,000", "$12,000", "$0"], "2,000 pieces below normal capacity × $12."),
  fq("Fixed overheads $90,000, normal capacity 6,000, actual 5,000. How much is expensed as unabsorbed?", "$15,000", ["$75,000", "$90,000", "$0"], "Rate $15 × 1,000 pieces."),
  fq("A dining table uses $180 timber, $60 fittings, 5 hours at $30, $20 variable and $12 fixed overhead. Its cost?", "$422", ["$390", "$410", "$450"], "Add every production cost."),
  fq("Which storage cost can be included in inventory?", "Storage needed in production, such as drying timber", ["Showroom storage", "Storing finished goods awaiting sale", "Office archives"], "Otherwise storage is expensed."),
  fq("Which method suits Maple Ridge's workshop?", "Standard cost", ["Retail method", "LIFO only", "Cash basis"], "Common in manufacturing."),

  // Module 3
  fq("What's FIFO closing inventory for the 150 remaining lamps?", "$2,100", ["$1,837.50", "$1,600", "$2,800"], "50 × $12 + 100 × $15."),
  fq("What's LIFO cost of goods sold for the 250 lamps?", "$3,300", ["$2,800", "$3,062.50", "$4,900"], "100 × $15 + 150 × $12."),
  fq("What's weighted-average gross profit on the lamps?", "$1,937.50", ["$2,200", "$1,700", "$5,000"], "$5,000 − $3,062.50."),
  fq("Opening 50 chairs at $40; bought 100 at $44; sold 120. What's FIFO cost of goods sold?", "$5,080", ["$5,280", "$4,800", "$5,120"], "50 × $40 + 70 × $44."),
  fq("What does the US LIFO conformity rule require?", "Businesses using LIFO for tax generally use it in their financial statements too", ["LIFO must be used by all companies", "LIFO is banned for tax", "Inventory must be revalued yearly"], "Tax and book methods align."),
  fq("Is specific identification optional under IFRS for non-interchangeable items?", "No — it's required", ["Yes, always optional", "It's banned", "Only for LIFO users"], "Unique items need their actual cost."),

  // Module 4
  fq("What did the older-design armchairs need before they could be sold?", "Re-upholstering", ["Repainting the showroom", "A new supplier", "Nothing"], "Part of the costs to complete."),
  fq("What was Maple Ridge's total age-based inventory provision?", "$11,000", ["$4,000", "$8,000", "$237,000"], "$4,000 + $4,000 + $3,000."),
  fq("What provision % did Maple Ridge use for stock unsold over 24 months?", "100%", ["25%", "50%", "0%"], "The oldest stock is fully provided."),
  fq("200 water-stained sofas cost $600 each; NRV is $370. What's the write-down?", "$46,000", ["$23,000", "$74,000", "$120,000"], "($600 − $370) × 200."),
  fq("Armchairs written down to $37 later sell for $50. Under IFRS, up to what amount can the write-down be reversed?", "Up to the original $40 cost", ["Up to $50", "It can't be reversed", "Up to $45"], "Reversals are capped at cost."),
  fq("Which measure does US GAAP use for LIFO and retail-method inventory?", "Lower of cost or market", ["Lower of cost and NRV", "Fair value", "Replacement cost only"], "FIFO and average use lower of cost and NRV."),

  // Module 5
  fq("Where does Maple Ridge count stock?", "Workshop, warehouse and showroom", ["Only the warehouse", "Only the showroom", "At the bank"], "Count sheets are organised by location."),
  fq("How often does Maple Ridge count high-value finished goods?", "Monthly", ["Once a year", "Every five years", "Never"], "Timber is counted quarterly."),
  fq("How is work in progress counted?", "Estimated by stage of completion", ["Ignored", "Counted as finished goods", "Valued at selling price"], "Partly finished items need judgement."),
  fq("Books show 40 boxes of 100 screws; the counter recorded 4,000. What's the difference?", "None — it's a units-of-measure mismatch", ["3,960 screws missing", "40 boxes missing", "A theft"], "40 × 100 = 4,000."),
  fq("Which account is debited for net shrinkage of $570?", "Cost of goods sold — inventory adjustment", ["Revenue", "Inventory", "Cash"], "Inventory is credited."),
  fq("Which fix suits repeated losses of small, valuable items?", "Better access and receiving controls, such as locked storage or CCTV", ["Stop counting them", "Increase prices", "Delete them from the system"], "Fix the cause."),

  // Module 6
  fq("Who should approve write-offs and count adjustments?", "An authorised person independent of the count", ["Anyone", "The supplier", "The customer"], "An adjustment control."),
  fq("Accessories: COGS $53,000 and average inventory $5,300. What's turnover?", "10×", ["6×", "5×", "1×"], "$53,000 ÷ $5,300."),
  fq("What's the chairs' gross margin?", "45%", ["30%", "47%", "40%"], "$99,000 ÷ $220,000."),
  fq("If timber costs fall by $9,000, what's the tables' new margin?", "35%", ["30%", "40%", "25%"], "$63,000 ÷ $180,000."),
  fq("What extra information do US LIFO users disclose?", "The LIFO reserve", ["Staff numbers", "Customer lists", "Bank passwords"], "It shows the difference from FIFO."),
  fq("Which item belongs on the inventory period-end checklist?", "Overheads absorbed on normal capacity", ["Revaluing stock to selling price", "Including consignment stock", "Skipping the count"], "Costs must be correct."),
]
